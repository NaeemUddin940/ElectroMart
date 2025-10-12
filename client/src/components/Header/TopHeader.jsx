import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function TopHeader() {
  return (
    <div className="hidden md:block dark:bg-gray-950 dark:text-white bg-gray-200 text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Hotline Number For Large Device */}
        <div className="hidden lg:flex items-center gap-2">
          <span className="bg-gray-200 dark:bg-gray-800 font-bold px-2 py-1 rounded text-xs">
            📞 Hotline 24/7
          </span>
          <a href="tel:+8801311078039" className="font-semibold">
            01311-078039
          </a>
          <span>,</span>
          <a href="tel:+8801790970480" className="font-semibold">
            01790970480
          </a>
        </div>
        <div className="lg:hidden">
          <Select>
            <SelectTrigger className="w-[150px] font-semibold bg-secondary ">
              <SelectValue placeholder="Hotline Number" />
            </SelectTrigger>

            <SelectContent>
              <SelectGroup>
                <SelectLabel>Hotline Number</SelectLabel>
                <SelectItem value="01311078039">
                  <a href="tel:+8801311078039" className="font-semibold">
                    01311-078039
                  </a>
                </SelectItem>
                <SelectItem value="01790970480">
                  <a href="tel:+8801790970480" className="font-semibold">
                    01790970480
                  </a>
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <span className="font-medium text-sm">Sell on Axentra</span>
          <span className="font-medium text-sm">Order Tracking</span>
          <div className="flex items-center gap-1">
            <Select>
              <SelectTrigger className="w-[150px] font-semibold bg-secondary ">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Currency</SelectLabel>
                  <SelectItem value="usdt">USDT</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-1">
            <Select>
              <SelectTrigger className="w-[150px] font-semibold bg-secondary ">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Choose Language</SelectLabel>
                  <SelectItem value="english">English</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}
