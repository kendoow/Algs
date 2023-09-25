modules.exports.parse = function (fetcher: Fetcher, src: string, chunkSize: number): AsyncIterable<any[]> {
        const data = await fetcher(src);
    
        return async function* iterateData(data) {
            let currentChunk = [];
    
            for (const item of data) {
                if (item.type === 'data') {
                    currentChunk.push(item.value);
                } else if (item.type === 'provider') {
                    const providerData = await fetcher(item.src);
                    currentChunk.push(providerData);
                }
    
                if (currentChunk.length === chunkSize) {
                    yield currentChunk;
                    currentChunk = [];
                }
    
                if (item.children && item.children.length > 0) {
                    const childChunks = iterateData(item.children);
                    for await (const childChunk of childChunks) {
                        currentChunk.push(...childChunk);
    
                        while (currentChunk.length >= chunkSize) {
                            yield currentChunk.slice(0, chunkSize);
                            currentChunk = currentChunk.slice(chunkSize);
                        }
                    }
                }
            }
    
            if (currentChunk.length > 0) {
                yield currentChunk;
            }
        }
    
        const chunks = iterateData(data);
        for await (const chunk of chunks) {
            yield chunk;
        }
    };
};