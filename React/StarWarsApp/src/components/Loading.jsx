import { Button } from '@material-tailwind/react'

export default function Loading() {
  return (
    <div className="flex items-center gap-4 justify-center ">
      <Button loading={true} className="text-red-800 ">
        Loading
      </Button>
      {/* <Button variant="outlined" loading={true}>
        Loading
      </Button>
      <Button variant="text" loading={true} className='text-white'>
        Loading
      </Button>
      <Button className="rounded-full" loading={true}>
        Loading
      </Button> */}
    </div>
  )
}