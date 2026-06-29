import React from 'react'
// This is the About Us page component. It will be rendered when the user navigates to the /about-us route.
//ye previous means system k page.js k home data ko replace kr k about-us k page.js k data ko show kry ga {children} ki help se, jo layout.js me define hai.
export default function AboutUS() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-gray-600">
                Welcome to our company! We are a team of passionate professionals dedicated to providing the best services in our industry.
            </p>
        </div>
    )
}
