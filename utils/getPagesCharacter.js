const getPagesCaracter = (arr, charPerPage) => {
    let page = 0, charArr = 0
    for (let i = 0; i < arr.length; i++) {
        charArr[page] = arr[i];
        if((i+1) % charPerPage === 0)
            page++
    }
    return charArr
}

export default getPagesCaracter