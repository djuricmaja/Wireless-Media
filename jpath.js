function jPath(value) {
    let a = [];

    for (const key in value) {
        let keyValue = value[key];

        if (keyValue instanceof Object) {
            let innerValue = jPath(keyValue);

            for (innerKey in innerValue) {
                let innerKeyValue = innerValue[innerKey];
                a.push(key + '.' + innerKeyValue);
            }
        } else {
            a.push(key + ':' + keyValue);
        }
    }

    return a;
}
