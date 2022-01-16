

export const requestParams = (searchTitle, page, pageSize) => {
    let params = {};

    if (searchTitle) {
        params.title = searchTitle;
    }

    if (page) {
        params.page = page;
    }

    if (pageSize) {
        params.size = pageSize;
    }

    return params;

}