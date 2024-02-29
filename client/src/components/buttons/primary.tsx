import { IconType } from "react-icons"

const PrimaryButton = ({ title, icon: Icon }: { title: string; icon?: IconType }) => {
    return (
        <button className="border-[#3A7DFF] border-[1px] bg-[#3A7DFF] text-white flex py-4 px-6 text-md rounded-full">
            {title}
            {Icon && <Icon className="ml-3" size={24} />}
        </button>
    )
}

export default PrimaryButton