import { useNavigate } from 'react-router-dom'

function ResultPage() {
    // const { score } = useParams()
    const score = 2
	const navigate = useNavigate()

	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h1 className='text-3xl font-bold'>Hasil Tryout</h1>
			<p className='text-xl mt-4'>Skor Anda: {score}</p>
			<button
				onClick={() => navigate('/')}
				className='bg-green-500 text-white px-4 py-2 rounded mt-4'
			>
				Coba Lagi
			</button>
		</div>
	)
}

export default ResultPage