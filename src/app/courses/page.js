"use client"
import React from 'react'
import CourseCard from '../components/common/CourseCard'

export default function Courses() {
  const [courses, setCourses] = React.useState([])
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.products || [])
      })
      .catch((fetchError) => {
        console.error('Error fetching courses:', fetchError)
        setError('Unable to load courses right now.')
      })
  }, [])

  return (
    <div className="px-4 py-8 max-w-screen-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Courses</h1>
      <p className="text-gray-600 mb-6">Explore our wide range of courses and advance your skills.</p>
      {error && <p className="text-red-600 mb-6">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courses.length > 0
          ? courses.map((course) => <CourseCard key={course.id} course={course} />)
          : Array.from({ length: 3 }).map((_, index) => <CourseCard key={`placeholder-${index}`} />)}
      </div>
    </div>
  )
}
