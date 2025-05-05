import { SVGAttributes } from "react";

interface Props extends SVGAttributes<SVGElement> {
  size: number
}

export function Check(props: Props) {
  const { size } = props

  return (
    <svg
      width={size}
      height={size}
      fill="none"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}