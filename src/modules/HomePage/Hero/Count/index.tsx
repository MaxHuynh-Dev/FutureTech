import Text from "@/components/ui/text";
import type React from "react";

interface CountProps {
  number: string;
  description: string;
}

function Count({ number, description }: CountProps): React.ReactElement {
  return (
    <div className="desktop:py-[50px] laptop:py-[30px] py-[20px]">
      <div className="flex flex-col gap-[10px]">
        <Text as="p" size={24} weight="semibold" color="white">
          {number}
          <Text as="span" size={24} weight="semibold" color="yellow-55">
            +
          </Text>
        </Text>
        <Text
          as="p"
          size={14}
          weight={"normal"}
          color="grey-60"
          className="desktop:text-[18px] text-[14px]/[1.5]"
        >
          {description}
        </Text>
      </div>
    </div>
  );
}

export default Count;
