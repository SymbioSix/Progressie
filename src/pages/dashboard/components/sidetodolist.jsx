import { Icon } from "@iconify/react";

export const SideTodolist = () => {
    return (
        <div className="flex flex-col h-[60%] overflow-auto gap-4 rounded-2xl p-4 bg-gray-100">
            <span className="text-xl font-bold text-center">To do list</span>
            <div className="w-full h-auto overflow-auto">
                <div className="font-bold text-md">
                    Subcourse Name
                </div>
                <div id="container-list-target" className="flex items-center gap-3 p-3">
                    <Icon
                        icon="teenyicons:tick-circle-solid"
                        width="24"
                        height="24"
                        style={{ color: "#000000" }}
                        className="flex-shrink-0"
                    />
                    <Icon
                        icon="hugeicons:task-01"
                        width="26"
                        height="26"
                        style={{ color: "#000000" }}
                        className="flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold text-black">
                            Video Memasak
                        </span>
                        <span className="font-bold text-black">
                            Quiz Menang
                        </span>
                        <span className="text-black text-xs">
                            Today 01.00 PM
                        </span>
                    </div>
                </div>
                <div id="container-list-target" className="flex justify-center items-center gap-3 p-3">
                    <Icon
                        icon="teenyicons:tick-circle-solid"
                        width="24"
                        height="24"
                        style={{ color: "#000000" }}
                        className="flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold text-black">
                            Cek Apakah Kamu Sudah Melakukan Target
                        </span>
                        <span className="text-black text-xs">
                            Today 03.00 PM
                        </span>
                    </div>
                </div>
                <div id="container-list-target" className="flex items-center gap-3 p-3">
                    <Icon
                        icon="teenyicons:tick-circle-solid"
                        width="24"
                        height="24"
                        style={{ color: "#000000" }}
                        className="flex-shrink-0"
                    />
                    <Icon
                        icon="hugeicons:task-01"
                        width="26"
                        height="26"
                        style={{ color: "#000000" }}
                        className="flex-shrink-0"
                    />
                    <div className="flex flex-col gap-1 text-sm">
                        <span className="font-bold text-black">
                            Video Memasak
                        </span>
                        <span className="font-bold text-black">
                            Quiz Menang
                        </span>
                        <span className="text-black text-xs">
                            Tomorrow 03.00 PM
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}