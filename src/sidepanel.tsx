import { useForm } from "react-hook-form"
import { z } from "zod"

import { useStorage } from "@plasmohq/storage/hook"

import { Button } from "~components/ui/Button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "~components/ui/dialog"

import "~style.css"

const TIME_STAMP_REGEX = /^(?:(?:(\d+):)?(\d+):)?(\d+)$/

const timestampFormSchema = z.object({
  timeStamp: z
    .string()
    .min(1, {
      message: "Timestamp cannot be empty"
    })
    .regex(TIME_STAMP_REGEX, {
      message: "Please enter a correct timestamp"
    })
})

function IndexSidepanel() {
  const [timestamps, setTimestamps] = useStorage("timestamp", [])
  const form = useForm()

  function onSubmit(values: z.infer<typeof timestampFormSchema>) {
    console.log(values)
  }

  return (
    <div className="w-full p-2 flex items-center justify-center">
      <div className="my-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">Add timestamp</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>And a new timestamp</DialogTitle>
              <DialogDescription>
                Save timestamp and note associated with it.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}

export default IndexSidepanel
