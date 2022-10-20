import { useState, useEffect } from "react"

import { TbVaccine as VaccineIcon } from "react-icons/tb"
import { FaDog as DogIcon, FaCat as CatIcon } from "react-icons/fa"
import { IoLocationSharp as LocationIcon } from "react-icons/io5"

import * as S from "./styles"

const Filters = ({ getPets }) => {
	const [filters, setFilters] = useState({
		type: "",
		vaccinated: "",
		location: "",
	})
	const [apllyFilters, setApllyFilters] = useState()

	useEffect(() => {
		setApllyFilters(filters)
	}, [])

	return (
		<S.Filters>
			<p>Filters:</p>

			<DogIcon
				style={S.HeaderIcons}
				onClick={() =>
					filters.type === "dog"
						? setFilters({ ...filters, type: "" })
						: setFilters({ ...filters, type: "dog" })
				}
				className={filters.type === "dog" && "selected"}
			/>

			<CatIcon
				style={S.HeaderIcons}
				onClick={() =>
					filters.type === "cat"
						? setFilters({ ...filters, type: "" })
						: setFilters({ ...filters, type: "cat" })
				}
				className={filters.type === "cat" && "selected"}
			/>

			<VaccineIcon
				style={S.HeaderIcons}
				onClick={() =>
					filters.vaccinated === "true"
						? setFilters({ ...filters, vaccinated: "" })
						: setFilters({ ...filters, vaccinated: "true" })
				}
				className={filters.vaccinated === "true" && "selected"}
			/>

			<LocationIcon
				style={S.HeaderIcons}
				onClick={() =>
					filters.location === "true"
						? setFilters({ ...filters, location: "" })
						: setFilters({ ...filters, location: "true" })
				}
				className={filters.location === "true" && "selected"}
			/>
			{apllyFilters?.type !== filters.type ||
			apllyFilters?.vaccinated !== filters.vaccinated ||
			apllyFilters?.location !== filters.location ? (
				<button
					onClick={() => {
						setApllyFilters(filters)
						getPets(filters)
					}}>
					Ok
				</button>
			) : (
				""
			)}
		</S.Filters>
	)
}

export default Filters
