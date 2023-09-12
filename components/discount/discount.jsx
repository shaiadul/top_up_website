import React from 'react'

const DiscountA = () => {
  return (
    <div className=" container mx-auto ">
	<div className="p-6 py-12 bg-[#50DBB4] dark:text-gray-900 rounded-md shadow-md md:block flex justify-center items-center mx-5 md:mx-0">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl font-bold">Up to
				<br className="sm:hidden"/>50% Off
			</h2>
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">SHAIa404</span>
			</div>
			<a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400">Shop Now</a>
		</div>
	</div>
</div>
  )
}

export default DiscountA