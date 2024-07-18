import dataCard from "../api/cardTopic";

const Card = () => {
    return (
        <div className="flex justify-between w-full h-[900px] pt-[200px] pb-[100px]">
            {dataCard.map((data, index) => {
                const alignmentClass = index === 0 || index === 2 ? 'items-end' : 'items-start';
                return (
                    <div 
                        key={index} 
                        className={`flex-1 flex ${alignmentClass}`}
                    >
                        <div 
                            id="card-service" 
                            className="w-[460px] h-[400px] flex flex-col gap-2 p-5 rounded-xl bg-white shadow-[0_5px_3px_0px_rgba(0,0,0,1)]"
                        >
                            <h3 className="text-3xl font-bold">{data.nameService}</h3>
                            <p className="text-2xl font-bold">
                                {data.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Card;