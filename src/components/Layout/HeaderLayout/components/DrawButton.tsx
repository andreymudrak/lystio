import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import DrawIcon from '@/assets/icons/DrawIcon'
import { cn } from '@/utils/classNames'

interface DrawButtonProps {
  className?: string
}

export const DrawButton: React.FC<DrawButtonProps> = ({ className }) => {
  return (
    <button
      className={cn(
        'px-2 w-full border border-black-10 rounded-corner-medium flex items-center gap-2 text-sm box-border h-12 shadow-[0px_11px_35.2px_0px_#0000000F] duration-500 hover:bg-main-hover',
        className
      )}
    >
      <div className="rounded-full size-8 flex items-center justify-center bg-main-10">
        <DrawIcon />
      </div>
      Draw an area on the map
      <ArrowRightIcon className="ml-auto" />
    </button>
  )
}
