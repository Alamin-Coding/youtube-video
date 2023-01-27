import React from 'react'
const Nav = () => {
  return (
    <nav className="py-3 bg-black font-hind border-b border-slate-800 ">
        <div className="container grid grid-cols-[auto_1fr] items-center">
            <div>
                <a className="text-primary font-extrabold text-4xl text-red-500" href="/">Youtube</a>
            </div>
            <div>
                <ul className="menu flex items-center justify-end gap-3">
                    <li><a className="text-primary hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">হোম</a></li>
                    <li><a className="text-slate-300 hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">কোর্স সমূহ</a></li>
                    <li><a className="text-slate-300 hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">মডিউলস</a></li>
                    <li><a className="text-slate-300 hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">কিভাবে চলবে</a></li>
                    <li><a className="text-slate-300 hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">কেন করবেন</a></li>
                    <li><a className="text-slate-300 hover:text-primary hover:bg-slate-800 p-2 rounded-sm" href="/">যোগাযোগ</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav