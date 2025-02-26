const tryouts = [
  { id: 1, title: 'Matematika Dasar' },
  { id: 2, title: 'Bahasa Indonesia' },
  { id: 3, title: 'Bahasa Inggris' },
  { id: 4, title: 'IPA' },
  { id: 5, title: 'IPS' },
  { id: 6, title: 'TIK' },
  { id: 7, title: 'Seni Budaya' },
  { id: 8, title: 'Penjaskes' },
  { id: 9, title: 'Pendidikan Agama' },
  { id: 10, title: 'PPKN' },
  { id: 11, title: 'Geografi' },
  { id: 12, title: 'Sejarah' },
  { id: 13, title: 'Sosiologi' },
  { id: 14, title: 'Ekonomi' },
  { id: 15, title: 'Fisika' },
  { id: 16, title: 'Kimia' },
  { id: 17, title: 'Biologi' },
]

function App() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
			<h1 className='text-3xl font-bold mb-6'>Tryout App</h1>
			<div className='grid grid-cols-1 gap-4'>
				{tryouts.map((tryout) => (
					<a
						key={tryout.id}
						href={`/tryout/${tryout.id}`}
						className='bg-white p-4 shadow-md rounded-lg text-center'
					>
						{tryout.title}
					</a>
				))}
			</div>
		</div>
	)
}

export default App