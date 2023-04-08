import React from 'react'

const addCurve = (e,n) => {
    e.preventDefault();
    const items = document.querySelector(".nav-items");
    for(let i=0; i<items.children.length; i++) {
        const item = items.children[i];
        if(i===n) {
            item.querySelector(".icon1").style.display = "none";
            item.querySelector(".icon2").style.display = "block";
        }
        else {
            item.querySelector(".icon1").style.display = "block";
            item.querySelector(".icon2").style.display = "none";
        }
    }

    console.log(items.children);
}

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-container center">
            <a href="/">
                <img src="../assets/logo.png" alt="logo" className="logo" />
            </a>
            <div className="nav-items center">
                <a onClick={e=>addCurve(e,0)} className="nav-item" href="/home">
                    <svg style={{display: "none"}} className="icon1" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 27C6.8125 27 6.22375 26.755 5.73375 26.265C5.24375 25.775 4.99917 25.1867 5 24.5V13.25C5 12.8542 5.08875 12.4792 5.26625 12.125C5.44375 11.7708 5.68834 11.4792 6 11.25L13.5 5.625C13.7292 5.45833 13.9688 5.33333 14.2188 5.25C14.4688 5.16667 14.7292 5.125 15 5.125C15.2708 5.125 15.5313 5.16667 15.7813 5.25C16.0313 5.33333 16.2708 5.45833 16.5 5.625L24 11.25C24.3125 11.4792 24.5575 11.7708 24.735 12.125C24.9125 12.4792 25.0008 12.8542 25 13.25V24.5C25 25.1875 24.755 25.7762 24.265 26.2662C23.775 26.7562 23.1867 27.0008 22.5 27H17.5V18.25H12.5V27H7.5Z" fill="white"/>
                    </svg>
                    <svg className="icon2" width="100" height="107" viewBox="0 0 100 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="49" y="9" width="51" height="78" fill="#FAFAFA"/>
                        <circle cx="50" cy="54" r="25" fill="#FAFAFA"/>
                        <path d="M0 0H100V19C100 24.5228 95.5228 29 90 29H0V0Z" fill="#1A1A1C"/>
                        <path d="M0 79H90C95.5228 79 100 83.4772 100 89V107H0V79Z" fill="#1A1A1C"/>
                        <path d="M42.5 65.25C41.8125 65.25 41.2238 65.005 40.7338 64.515C40.2438 64.025 39.9992 63.4367 40 62.75V51.5C40 51.1042 40.0888 50.7292 40.2663 50.375C40.4438 50.0208 40.6883 49.7292 41 49.5L48.5 43.875C48.7292 43.7083 48.9688 43.5833 49.2188 43.5C49.4688 43.4167 49.7292 43.375 50 43.375C50.2708 43.375 50.5313 43.4167 50.7813 43.5C51.0313 43.5833 51.2708 43.7083 51.5 43.875L59 49.5C59.3125 49.7292 59.5575 50.0208 59.735 50.375C59.9125 50.7292 60.0008 51.1042 60 51.5V62.75C60 63.4375 59.755 64.0262 59.265 64.5162C58.775 65.0062 58.1867 65.2508 57.5 65.25H52.5V56.5H47.5V65.25H42.5Z" fill="#1A1A1C"/>
                    </svg>
                </a>
                <a onClick={e=>addCurve(e,1)}  className="nav-item" href="/home">
                    <svg className="icon1"width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 13.25C17.7614 13.25 20 11.0114 20 8.25C20 5.48858 17.7614 3.25 15 3.25C12.2386 3.25 10 5.48858 10 8.25C10 11.0114 12.2386 13.25 15 13.25Z" fill="#F8F8F8"/>
                        <path d="M25 22.625C25 25.7312 25 28.25 15 28.25C5 28.25 5 25.7312 5 22.625C5 19.5188 9.4775 17 15 17C20.5225 17 25 19.5188 25 22.625Z" fill="#F8F8F8"/>
                    </svg>
                    <svg className="icon2" style={{display: "none"}} width="100" height="107" viewBox="0 0 100 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="49" y="9" width="51" height="78" fill="#FAFAFA"/>
                        <circle cx="50" cy="54" r="25" fill="#FAFAFA"/>
                        <path d="M0 0H100V19C100 24.5228 95.5228 29 90 29H0V0Z" fill="#1A1A1C"/>
                        <path d="M0 79H90C95.5228 79 100 83.4772 100 89V107H0V79Z" fill="#1A1A1C"/>
                        <g clipPath="url(#clip0_0_1)">
                        <path d="M50 51.5C52.7614 51.5 55 49.2614 55 46.5C55 43.7386 52.7614 41.5 50 41.5C47.2386 41.5 45 43.7386 45 46.5C45 49.2614 47.2386 51.5 50 51.5Z" fill="#1A1A1C"/>
                        <path d="M60 60.875C60 63.9812 60 66.5 50 66.5C40 66.5 40 63.9812 40 60.875C40 57.7688 44.4775 55.25 50 55.25C55.5225 55.25 60 57.7688 60 60.875Z" fill="#1A1A1C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_1">
                        <rect width="30" height="30" fill="white" transform="translate(35 39)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                <a onClick={e=>addCurve(e,2)} className="nav-item" href="/home">
                    <svg className="icon1" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M25 7.75C25 7.21957 24.7893 6.71086 24.4142 6.33579C24.0391 5.96071 23.5304 5.75 23 5.75H7C6.46957 5.75 5.96086 5.96071 5.58579 6.33579C5.21071 6.71086 5 7.21957 5 7.75V19.75C5 20.2804 5.21071 20.7891 5.58579 21.1642C5.96086 21.5393 6.46957 21.75 7 21.75H21L25 25.75V7.75Z" fill="#F8F8F8"/>
                    </svg>
                    <svg className="icon2" style={{display: "none"}} width="100" height="107" viewBox="0 0 100 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="49" y="9" width="51" height="78" fill="#FAFAFA"/>
                        <circle cx="50" cy="54" r="25" fill="#FAFAFA"/>
                        <path d="M0 0H100V19C100 24.5228 95.5228 29 90 29H0V0Z" fill="#1A1A1C"/>
                        <path d="M0 79H90C95.5228 79 100 83.4772 100 89V107H0V79Z" fill="#1A1A1C"/>
                        <g clipPath="url(#clip0_0_1)">
                        <path d="M60 46C60 45.4696 59.7893 44.9609 59.4142 44.5858C59.0391 44.2107 58.5304 44 58 44H42C41.4696 44 40.9609 44.2107 40.5858 44.5858C40.2107 44.9609 40 45.4696 40 46V58C40 58.5304 40.2107 59.0391 40.5858 59.4142C40.9609 59.7893 41.4696 60 42 60H56L60 64V46Z" fill="#1A1A1C"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_0_1">
                        <rect width="30" height="30" fill="white" transform="translate(35 39)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
                <a onClick={e=>addCurve(e,3)} className="nav-item" href="/home">
                    <svg className="icon1" width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.3748 15.75C24.3748 15.4625 24.3623 15.1875 24.3373 14.9L26.6623 13.1375C27.1623 12.7625 27.2998 12.0625 26.9873 11.5125L24.6498 7.475C24.4999 7.21023 24.2575 7.01018 23.9691 6.91327C23.6807 6.81637 23.3667 6.82945 23.0873 6.95L20.3998 8.0875C19.9373 7.7625 19.4498 7.475 18.9373 7.2375L18.5748 4.35C18.4998 3.725 17.9623 3.25 17.3373 3.25H12.6748C12.0373 3.25 11.4998 3.725 11.4248 4.35L11.0623 7.2375C10.5498 7.475 10.0623 7.7625 9.59983 8.0875L6.91233 6.95C6.33733 6.7 5.66233 6.925 5.34983 7.475L3.01233 11.525C2.69983 12.075 2.83733 12.7625 3.33733 13.15L5.66233 14.9125C5.61051 15.4738 5.61051 16.0387 5.66233 16.6L3.33733 18.3625C2.83733 18.7375 2.69983 19.4375 3.01233 19.9875L5.34983 24.025C5.66233 24.575 6.33733 24.8 6.91233 24.55L9.59983 23.4125C10.0623 23.7375 10.5498 24.025 11.0623 24.2625L11.4248 27.15C11.4998 27.775 12.0373 28.25 12.6623 28.25H17.3248C17.9498 28.25 18.4873 27.775 18.5623 27.15L18.9248 24.2625C19.4373 24.025 19.9248 23.7375 20.3873 23.4125L23.0748 24.55C23.6498 24.8 24.3248 24.575 24.6373 24.025L26.9748 19.9875C27.2873 19.4375 27.1498 18.75 26.6498 18.3625L24.3248 16.6C24.3623 16.3125 24.3748 16.0375 24.3748 15.75ZM15.0498 20.125C12.6373 20.125 10.6748 18.1625 10.6748 15.75C10.6748 13.3375 12.6373 11.375 15.0498 11.375C17.4623 11.375 19.4248 13.3375 19.4248 15.75C19.4248 18.1625 17.4623 20.125 15.0498 20.125Z" fill="#F8F8F8"/>
                    </svg>
                    <svg className="icon2" style={{display: "none"}} width="100" height="107" viewBox="0 0 100 107" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="49" y="9" width="51" height="78" fill="#FAFAFA"/>
                        <circle cx="50" cy="54" r="25" fill="#FAFAFA"/>
                        <path d="M0 0H100V19C100 24.5228 95.5228 29 90 29H0V0Z" fill="#1A1A1C"/>
                        <path d="M0 79H90C95.5228 79 100 83.4772 100 89V107H0V79Z" fill="#1A1A1C"/>
                        <path d="M59.3749 54C59.3749 53.7125 59.3624 53.4375 59.3374 53.15L61.6624 51.3875C62.1624 51.0125 62.2999 50.3125 61.9874 49.7625L59.6499 45.725C59.5001 45.4602 59.2576 45.2602 58.9692 45.1633C58.6808 45.0664 58.3668 45.0795 58.0874 45.2L55.3999 46.3375C54.9374 46.0125 54.4499 45.725 53.9374 45.4875L53.5749 42.6C53.4999 41.975 52.9624 41.5 52.3374 41.5H47.6749C47.0374 41.5 46.4999 41.975 46.4249 42.6L46.0624 45.4875C45.5499 45.725 45.0624 46.0125 44.5999 46.3375L41.9124 45.2C41.3374 44.95 40.6624 45.175 40.3499 45.725L38.0124 49.775C37.6999 50.325 37.8374 51.0125 38.3374 51.4L40.6624 53.1625C40.6106 53.7238 40.6106 54.2887 40.6624 54.85L38.3374 56.6125C37.8374 56.9875 37.6999 57.6875 38.0124 58.2375L40.3499 62.275C40.6624 62.825 41.3374 63.05 41.9124 62.8L44.5999 61.6625C45.0624 61.9875 45.5499 62.275 46.0624 62.5125L46.4249 65.4C46.4999 66.025 47.0374 66.5 47.6624 66.5H52.3249C52.9499 66.5 53.4874 66.025 53.5624 65.4L53.9249 62.5125C54.4374 62.275 54.9249 61.9875 55.3874 61.6625L58.0749 62.8C58.6499 63.05 59.3249 62.825 59.6374 62.275L61.9749 58.2375C62.2874 57.6875 62.1499 57 61.6499 56.6125L59.3249 54.85C59.3624 54.5625 59.3749 54.2875 59.3749 54ZM50.0499 58.375C47.6374 58.375 45.6749 56.4125 45.6749 54C45.6749 51.5875 47.6374 49.625 50.0499 49.625C52.4624 49.625 54.4249 51.5875 54.4249 54C54.4249 56.4125 52.4624 58.375 50.0499 58.375Z" fill="#1A1A1C"/>
                    </svg>
                </a>
            </div>
            <a href="/">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 26.5H6.5C5.83696 26.5 5.20107 26.2366 4.73223 25.7678C4.26339 25.2989 4 24.663 4 24V6.5C4 5.83696 4.26339 5.20107 4.73223 4.73223C5.20107 4.26339 5.83696 4 6.5 4H11.5M20.25 21.5L26.5 15.25M26.5 15.25L20.25 9M26.5 15.25H11.5" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </a>
        </div>
    </nav>
  )
}

export default Navbar