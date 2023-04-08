import React from 'react'

const Welcome = () => {
  return (
    <section className="welcome-page">
        <img src="./assets/logo.png" alt="logo" className="logo" />
        <main>
            <img src="./assets/kid.png" alt="kid" className="kid" />
            <div className="content center">
                <img src="./assets/logo.png" alt="logo" className="pixel-head" />
                <h1 className="tagline">“Discover the world through pictures”</h1>
                <div className="exp-btn center">
                    <a href="/home" className="btn-text center">Explore</a>
                    <a href="/home" className="arrow center">
                        <svg className="arrow-svg" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.625 21.5937C16.375 21.3437 16.255 21.0417 16.265 20.6875C16.275 20.3333 16.4054 20.0312 16.6563 19.7812L20.1875 16.25H6.25C5.89584 16.25 5.59875 16.13 5.35875 15.89C5.11875 15.65 4.99917 15.3533 5 15C5 14.6458 5.12 14.3487 5.36 14.1087C5.6 13.8687 5.89667 13.7492 6.25 13.75H20.1875L16.625 10.1875C16.375 9.9375 16.25 9.64042 16.25 9.29625C16.25 8.95208 16.375 8.65542 16.625 8.40625C16.875 8.15625 17.1721 8.03125 17.5163 8.03125C17.8604 8.03125 18.1571 8.15625 18.4063 8.40625L24.125 14.125C24.25 14.25 24.3388 14.3854 24.3913 14.5312C24.4438 14.6771 24.4696 14.8333 24.4688 15C24.4688 15.1667 24.4425 15.3229 24.39 15.4688C24.3375 15.6146 24.2492 15.75 24.125 15.875L18.375 21.625C18.1458 21.8542 17.8596 21.9688 17.5163 21.9688C17.1729 21.9688 16.8758 21.8437 16.625 21.5937Z" fill="#23B9CF"/>
                        </svg>
                    </a>
                </div>
            </div>
        </main>
    </section>
  )
}

export default Welcome
