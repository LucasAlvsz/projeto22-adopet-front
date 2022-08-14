const formatFilter = filters => {
	let formatedFilter = ""
	for (const key in filters) if (filters[key]) formatedFilter += `${key}=${filters[key]}&`
	return formatedFilter
}

export default formatFilter
