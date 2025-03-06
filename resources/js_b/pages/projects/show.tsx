import { Head, useForm } from "@inertiajs/react";
import { type BreadcrumbItem, type SharedData } from '@/types';
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import AppLayout from '@/layouts/app-layout';
import Heading from '@/components/heading';
import { CalendarDays, Info, MapPin, FileText, User, Users } from "lucide-react";
import { Link } from "@inertiajs/react";
import { Card } from "@/components/ui/card";

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
    {
        title: 'Detail Project',
        href: '',
    },
];

export default function ProjectIndex({ project }: { project: Project }) {
    const { data, setData, post, put, delete: destroy, processing, reset } = useForm({ name: "", description: "" });
    const [editing, setEditing] = useState<Project | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    return (
         <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Project Detail" />

            <div className="px-4 py-6">
                <div className="flex gap-4">
                    <div className="w-1/2 md:w-1/3 lg:w-1/4">       
                        {/* <Card className="p-4">     */}
                            <div className="">
                                <div className="mb-4">
                                    <h1 className="text-xl font-bold">{project.name}</h1>
                                </div>
                                <div className="grid grid-cols-6 gap-6 items-center text-sm mb-4">
                                    <div className="grid grid-cols-5 gap-1 col-span-2 text-gray-500 items-center">
                                        <Info className="w-4 h-4" />
                                        <span className="col-span-4">Status</span>
                                    </div>
                                    <span className="col-span-4">On Progress</span>
                                </div>

                                <div className="grid grid-cols-6 gap-6 items-center text-sm mb-4">
                                    <div className="grid grid-cols-5 gap-1 col-span-2 text-gray-500 items-center">
                                        <CalendarDays className="w-4 h-4" />
                                        <span className="col-span-4">Due date</span>
                                    </div>
                                    <span className="col-span-4">30 August 2025</span>
                                </div>

                                <div className="grid grid-cols-6 gap-6 items-center text-sm mb-4">
                                    <div className="grid grid-cols-5 gap-1 col-span-2 text-gray-500 items-center">
                                        <MapPin className="w-4 h-4" />
                                        <span className="col-span-4">Location</span>
                                    </div>
                                    <span className="col-span-4">Mamuju - Sulawesi Barat</span>
                                </div>

                                <div className="grid grid-cols-6 gap-6 items-center text-sm mb-4">
                                    <div className="grid grid-cols-5 gap-1 col-span-2 text-gray-500 items-center">
                                        <Users className="w-4 h-4" />
                                        <span className="col-span-4">Assigned</span>
                                    </div>
                                    <div className="col-span-4 flex gap-4">
                                        <span>Andy</span>
                                        <Link href="" className="py-0 px-2 text-sm border border-gray-300 rounded">+ Invite</Link>
                                    </div>
                                </div>

                                <div className="grid grid-cols-6 gap-6 items-center text-sm mb-4">
                                    <div className="grid grid-cols-5 gap-1 col-span-2 text-gray-500 items-center">
                                        <FileText className="w-4 h-4" />
                                        <span className="col-span-4">Desciption</span>
                                    </div>
                                    <span className="col-span-4">{project.description}</span>
                                </div>
                            </div>
                            {/* <Button className="w-full" variant="outline">Edit</Button> */}
                        {/* </Card>              */}
                    </div>
                    <div className="flex-1">
                        <Card className="p-4">    
                            Main
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}