import React from 'react'
import CourseCard from '../common/CourseCard'

export default function Latestcourses() {
  return (
    <section className="bg-lime-50 py-16 ">
      <h2 className="text-3xl font-bold text-center mb-8">Latest Courses</h2>
      <div className="max-w-[1280px] mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/> 
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/> 
      </div>
    </section>
  )
}
