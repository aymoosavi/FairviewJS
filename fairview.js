class Fairview {
    customFilter(dataArray, filteringObject) {
        let keys = Object.keys(filteringObject);
        let results = [];

        for (const [index, key] of keys.entries()) {
            let data = results;

            if (index === 0) {
                data = dataArray;
            }
            results = this.applyFilter(data, filteringObject, key);

            if (results.length === 0) {
                break;
            }
        }
        console.log(results);
    }

    applyFilter(dataArray, dataFilter, key) {
        let filteredData = [];
        let filter = dataFilter[key];

        if (typeof filter === "object") {

            if (filter.length === 0) {
                return dataArray;
            }

            let data = dataArray;

            for (let index = 0; index < filter.length; index++) {
                if (filteredData.length > 0) {
                    break;
                }

                let value = filter[index];
                let innerFilteredData = [];

                for (let counter = 0; counter < data.length; counter++) {
                    let row = data[counter];

                    if (row[key].includes(value)) {
                        innerFilteredData.push(row);
                    }
                }
                filteredData = innerFilteredData;
            }
        }

        if (typeof filter === "string") {
            for (let counter = 0; counter < dataArray.length; counter++) {
                let row = dataArray[counter];

                if (row[key] === filter) {
                    filteredData.push(row);
                }
            }
        }
        return filteredData;
    }
}
