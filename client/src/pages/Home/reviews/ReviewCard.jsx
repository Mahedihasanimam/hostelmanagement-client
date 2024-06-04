import { Rating } from "@smastrom/react-rating";


const ReviewCard = ({item}) => {
	const {name,photo,date,rating,detail}=item
    return (
        <div>
            <div className="container flex flex-col w-full max-w-4xl p-6 mx-auto divide-y rounded-md dark:divide-gray-300 dark:bg-gray-50 dark:text-gray-800">
	<div className="space-y-4 p-4">
		<div className="flex space-x-4">
			<div>
				<img src={photo} alt="" className="object-cover w-12 h-12 rounded-full dark:bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{name}</h4>
				<span className="text-xs dark:text-gray-600">{date}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 dark:text-yellow-700 pl-5">
		<Rating style={{ maxWidth: 80 }} value={rating} readOnly />
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm dark:text-gray-600">
		<p>{detail}</p>
	</div>
</div>
        </div>
    );
};

export default ReviewCard;