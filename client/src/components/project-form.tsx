"use client";

import { useForm } from "react-hook-form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { MultiSelect } from "./ui/multi-select";
import { toast } from "sonner";
const teamMembers = [
  {
    id: 1,
    name: "Batman",
    email: "batman@example.com",
  },
  {
    id: 2,
    name: "Spider-Man",
    email: "peter.parker@example.com",
  },
  {
    id: 3,
    name: "Iron Man",
    email: "tony.stark@example.com",
  },
  {
    id: 4,
    name: "Captain America",
    email: "steve.rogers@example.com",
  },
  {
    id: 5,
    name: "Black Widow",
    email: "natasha.romanoff@example.com",
  },
  {
    id: 6,
    name: "Thor",
    email: "thor.odinson@example.com",
  },
  {
    id: 7,
    name: "Hulk",
    email: "bruce.banner@example.com",
  },
  {
    id: 8,
    name: "Wonder Woman",
    email: "diana.prince@example.com",
  },
];

const projectFormSchema = z.object({
  name: z.string().min(3, {
    message: "the name is must be more then 3 letter",
  }),
  description: z.string(),
  teamMembers: z.array(z.string()),
});

export default function ProjectForm({
  showSheet,
  setShowSheet,
}: {
  showSheet: boolean;
  setShowSheet: any;
}) {
  const form = useForm<z.infer<typeof projectFormSchema>>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      name: "",
      description: "",
      teamMembers: teamMembers.map((member) => member.id.toString()),
    },
  });

  const handleCreateProject = (data: z.infer<typeof projectFormSchema>) => {
    console.log("Create Project", data);
    // TODO: call API or service to create project
    setShowSheet(false);
    toast.success("Project created successfully");
  };

  return (
    <Sheet open={showSheet} onOpenChange={setShowSheet}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Create a New Project</SheetTitle>
          <SheetDescription>Fill out the details below.</SheetDescription>
        </SheetHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleCreateProject)}
            className="mt-6 space-y-4 px-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="eg. sprint board" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}></FormField>

            <FormField
              control={form.control}
              name="teamMembers"
              render={({ field }) => (
                <FormItem className="py-2">
                  <FormLabel>Team Members</FormLabel>
                  <FormControl>
                    <div className="">
                      <MultiSelect
                        options={teamMembers.map((member) => ({
                          label: member.name,
                          value: member.id.toString(),
                        }))}
                        onValueChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}></FormField>

            <div className="flex justify-between">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <SheetClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </SheetClose>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
