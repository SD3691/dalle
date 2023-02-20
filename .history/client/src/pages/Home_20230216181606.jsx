import React,{useState,useEffect} from 'react'
import { Loader,Card ,Form } from "../components";

const Home = () => {
const [loading ,setLoading] = useState(false);

const [allPosts,setAllPosts] = useState(null);

const [searchText,setSearchText] = useState("");


	return (
	<section className="max-w-7xl mx-auto">
		<div>
			<h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
			<p className='mt-2 text-[#666e75] text-[14px] max-w-[500px]'>Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
		
		</div>
		<div className="mt-16"
		>
			<Form/>
		</div>
		<div className="mt-10">
			{loading?(
				<div className="flex justify-center items-center">
					<Loader/>
				</div>
			):(

				<div className='grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3'
				>
					{searchText}
				
				</div>
			)
		}
		</div>

	</section>
  )
}

export default Home