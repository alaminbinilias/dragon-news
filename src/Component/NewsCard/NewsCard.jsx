import { FaBookmark, FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { NavLink } from "react-router";

const NewsCard = ({ news }) => {
    const {
        title,
        rating,
        total_view,
        author,
        image_url,
        details,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-md border border-gray-200 rounded-lg mb-10">

            {/* Author Section */}
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-t-lg">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />

                    <div>
                        <h2 className="font-bold text-lg">{author.name}</h2>

                        <p className="text-gray-500 text-sm">
                            {new Date(author.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>

                <div className="flex gap-4 text-gray-500 text-lg">
                    <FaBookmark className="cursor-pointer" />
                    <FaShareAlt className="cursor-pointer" />
                </div>
            </div>

            {/* News Body */}
            <div className="p-5">
                <h2 className="text-3xl font-bold leading-snug mb-5">
                    {title}
                </h2>

                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-[300px] object-cover rounded-lg"
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className="badge badge-outline"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Details */}
                <p className="text-gray-600 mt-4">
                    {details.slice(0, 200)}....<NavLink className="text-orange-500 font-bold mt-3 hover:underline">Read More</NavLink>
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t">

                    {/* Rating */}
                    <div className="flex items-center gap-1 text-orange-400">
                        {[...Array(rating.number)].map((_, i) => (
                            <FaStar key={i} />
                        ))}

                        <span className="text-gray-700 ml-2">
                            {rating.number}
                        </span>
                    </div>

                    {/* Views */}
                    <div className="flex items-center gap-2 text-gray-500">
                        <FaEye />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;