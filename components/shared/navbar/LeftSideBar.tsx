import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = ["left"] as const;

type SheetSide = (typeof SHEET_SIDES)[number];

const LeftSideBar = () => {
  return (
    <>
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetContent key={side} side="left">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
          <SheetTrigger>
            {" "}
            <Button> OPEN</Button>
          </SheetTrigger>
        </Sheet>
      ))}
    </>
  );
};

export default LeftSideBar;
