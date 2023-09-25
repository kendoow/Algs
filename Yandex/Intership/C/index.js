

const foo = function (fetcher, src, chunkSize) {
    try {
        
    } catch
    return async function* iterateData() {
        let currentChunk = [];
        const data =  await fetcher(src);
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
                const childChunks = await iterateData(item.children);
                for await (const childChunk of childChunks) {

                    currentChunk.push(...childChunk);

                    if (currentChunk.length >= chunkSize) {
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

    const getData = async () => {
        await fetcher(src);
    }

    const foo = () => {
        const data = getData()
        for await (const chunk of iterateData(data)) {
            yield chunk;
        }
    }
    return foo
};


