
import about from "../../assets/about.jpg"
const About = () => {
    return (
        <div>
            <section className=" dark:bg-gray-100  dark:text-gray-800">
                <div className="text-center mx-auto lg:w-1/2 md:w-1/2 w-full px-8 mt-12">
                    <h1 className="text-4xl font-bold ">who we are?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi facilis ratione inventore mollitia magnam necessitatibus unde autem iure voluptatem alias.</p>
                </div>
	<div className=" flex  flex-col-reverse p-6 mx-auto sm:py-12 lg:pb-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Ac mattis
				<span className="text-violet-400 dark:text-violet-600">senectus </span>erat pharetra
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br  className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">Suspendisse</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded border-gray-100 dark:border-gray-800">Malesuada</a>
			</div>
		</div>
		<div className="flex  items-center justify-center  p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={about} alt="" className="object-contain  h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default About;