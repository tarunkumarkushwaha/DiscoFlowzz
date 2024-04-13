import { useCallback, useEffect, useRef } from "react"

const SideBar = ({ sidebar, toggleNav }) => {

    const menuRef = useRef();

    const closeOpenMenus = useCallback(
        (e) => {
            if (
                menuRef.current &&
                sidebar &&
                !menuRef.current.contains(e.target)
            ) {
                toggleNav();
            }
        },
        [sidebar]
    );

    useEffect(() => {
        document.addEventListener("mousedown", closeOpenMenus);
    }, [closeOpenMenus]);
    return (
        <>
            <aside ref={menuRef} className={`fixed z-20 top-0 left-0 h-full transition-all duration-1000 ease-in-out ${!sidebar ? "md:w-[25vw] w-[60vw] -translate-x-full" : "md:w-[20vw] w-[30vw] -translate-x-1"}`}>
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <div className="flex justify-center items-center p-2 text-gray-100 cursor-pointer rounded-lg">
                        <span className="ms-3 font-extrabold text-3xl">DiscoFlowzz</span>
                    </div>
                    <ul className="my-20 font-medium">
                        <li>
                            <div className="flex items-center p-2 cursor-pointer text-gray-100 rounded-lg justify-center">
                                <button type="button" className="w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    New videos +</button>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg justify-center">
                                <button type="button" className="w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    Home</button>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg justify-center">
                                <button type="button" className="w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    Templete</button>
                            </div>
                        </li>
                        <li>
                            <div className="flex items-center cursor-pointer p-2 text-gray-100 rounded-lg justify-center">
                                <button type="button" className="w-40 h-10 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                    All Videos</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}

export default SideBar