import { useState, useEffect } from "react"
import ClipLoader from "react-spinners/ClipLoader"



const Loader1 = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => {
			setLoading(false)
		}, 8000)
	}, [])

	return (
		<div>
			{loading ? (
				<ClipLoader color='#ffffff' loading={loading} size={150} />
			) : (
				<div>Test Test</div>
			)}
		</div>
	)
}

export default Loader1
