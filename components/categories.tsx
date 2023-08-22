'user client'
import { cn } from "@/lib/utils"

 
interface CategoriesProps {
    data: Category[]
}
export const Categories =({data}: CategoriesProps) => {
    return(
        <div className="w-full overflow-x-auto space-x-2 flex p-1">
            <button
                className={
                    cn(``)
                }
                >

            </button>
            categories
        </div>
    )
}