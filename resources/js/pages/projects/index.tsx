import { Head, useForm } from "@inertiajs/react";
import { type BreadcrumbItem, type SharedData } from '@/types';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from '@/layouts/app-layout';
import Heading from '@/components/heading';
import { Pencil, Trash } from "lucide-react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
  } from "@/components/ui/dialog"

type Project = {
    id: number;
    name: string;
    description: string;
};

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
];

export default function ProjectIndex({ projects }: { projects: Project[] }) {
    const { data, setData, post, put, delete: destroy, processing, reset } = useForm({ name: "", description: "" });
    const [editing, setEditing] = useState<Project | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editing) {
            put(route("projects.update", editing.id), {
                onSuccess: () => {
                    setEditing(null);
                    setIsDialogOpen(false); // <-- Close dialog after success
                    reset();
                },
            });
        } else {
            post(route("projects.store"), {
                onSuccess: () => {
                    setIsDialogOpen(false); // <-- Close dialog after success
                    reset();
                },
            });
        }
    };

    const handleEdit = (project: Project) => {
        setEditing(project);
        setData({ name: project.name, description: project.description });
        setIsDialogOpen(true);
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this project?")) {
            destroy(route("projects.destroy", id));
        }
    };

    return (
         <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Projects" />
            <div className="px-4 py-6">

                {projects.length > 0 ? (
                    <>
                    <div className="flex justify-between items-center">
                            
                    <Heading title="Projects" description="Manage your projects" />

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogTrigger asChild>
                            <Button variant="outline">Create Project</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                            <DialogTitle>{editing ? "Edit Project" : "Create Project"}</DialogTitle>
                            <DialogDescription>
                                {editing ? "" : "Create new for your business"}
                            </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={submit}>
                            <div className="grid py-4">
                                <Label htmlFor="name" className="block mb-2">
                                    Project Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    required
                                    value={data.name}
                                    onChange={(e) => setData("name", e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <div className="mb-4">
                                <Label htmlFor="description" className="block mb-2">
                                    Description
                                </Label>
                                <Textarea
                                    id="description"
                                    className=""
                                    required
                                    value={data.description}
                                    onChange={(e) => setData("description", e.target.value)}
                                    disabled={processing}
                                />
                            </div>
                            <DialogFooter>
                            <Button type="submit" disabled={processing}>{editing ? "Edit Project" : "Create Project"}</Button>
                            </DialogFooter>
                            </form>
                        </DialogContent>
                    </Dialog>
                    </div>

                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                        <TableRow>
                        <TableHead className="w-[200px]">Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead className="w-[100px]">Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {projects.map((project) => (
                        <TableRow key={project.id}>
                            <TableCell className="font-medium">{project.name}</TableCell>
                            <TableCell>{project.description}</TableCell>
                            <TableCell>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="icon" onClick={() => handleEdit(project)}>
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button variant="destructive" size="icon" onClick={() => handleDelete(project.id)}>
                                            <Trash className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    {/* <TableFooter>
                        <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                        </TableRow>
                    </TableFooter> */}
                    </Table>
                    </>
                ) : (
                    <div className="min-h-[80vh] flex items-center justify-center">
                        <div className="text-center">
                            <h4 className="font-bold">No Project</h4>
                            <p className="mb-4">Project not available</p>
                            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline">Create Project</Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                    <DialogTitle>Create Project</DialogTitle>
                                    <DialogDescription>
                                        Create new project for your business.
                                    </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={submit}>
                                    <div className="grid py-4">
                                        <Label htmlFor="name" className="block mb-2">
                                            Project Name
                                        </Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            required
                                            value={data.name}
                                            onChange={(e) => setData("name", e.target.value)}
                                            disabled={processing}
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <Label htmlFor="description" className="block mb-2">
                                            Description
                                        </Label>
                                        <Textarea
                                            id="description"
                                            className=""
                                            required
                                            value={data.description}
                                            onChange={(e) => setData("description", e.target.value)}
                                            disabled={processing}
                                        />
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" disabled={processing}>Create Project</Button>
                                    </DialogFooter>
                                    </form>
                                </DialogContent>
                            </Dialog>
                        </div>
                    </div>
                )}
                
                    
            </div>
        </AppLayout>
    );
}
