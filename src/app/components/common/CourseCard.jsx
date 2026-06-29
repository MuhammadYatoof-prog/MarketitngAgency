import React from 'react'

export default function CourseCard({ course }) {
  const title = course?.title || 'Course Title'
  const description = course?.description || 'Brief description of the course content.'
  const image = course?.thumbnail || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMxSdUUbB6D4QB-y2OKaL_bxHcoaTksR8CA&s'
  const price = course?.price ? `$${course.price}` : '$299.99'
  const brand = course?.brand || 'Online Course'

  return (
    <figure className="bg-white rounded-lg shadow-md overflow-hidden hover:-translate-y-1 transition-transform duration-200">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <p className="text-sm uppercase tracking-wide text-gray-500 mb-2">{brand}</p>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <div className="flex items-center justify-between gap-3">
          <span className="text-lg font-bold text-gray-900">{price}</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Enroll</button>
        </div>
      </div>
    </figure>
  )
}
