import * as DialogPrimitive from '@radix-ui/react-dialog'

export default function Dialog({ children }: { children: React.ReactNode }) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger className="group md:hidden">{children}</DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 top-[90px] z-50 grid place-items-start bg-black/50">
          <DialogPrimitive.Content className="z-10 h-fit w-full bg-black data-[state=open]:animate-content-show">
            <nav className="my-10">
              <ul className="flex flex-col items-start gap-8 px-6 text-white md:px-10">
                <li>
                  <a href="/" className="text-2xl hover:underline">
                    OUR COMPANY
                  </a>
                </li>
                <li>
                  <a href="/locations" className="text-2xl hover:underline">
                    LOCATIONS
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-2xl hover:underline">
                    CONTACT
                  </a>
                </li>
              </ul>
            </nav>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
