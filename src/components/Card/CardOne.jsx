import { Icon } from "@iconify/react/dist/iconify.js"

function CardOne({icon, title, description}) {
    return (
        <div>
            <div className="hover-border hover-border-outer mt-icon-box-wraper p-8 bg-white shadow-md">
                <Icon icon={icon} width="40" height="40" className="text-[#ff5e14]" />
                <h4 className="py-2 text-black font-semibold text-xl">{title}</h4>
                <p className="text-gray-800 leading-6 text-sm pb-3">
                   {description}
                </p>
            </div>
        </div>
    )
}

export default CardOne
