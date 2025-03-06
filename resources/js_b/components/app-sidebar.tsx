import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, FileDown, FileText, ClipboardCheck, CircleFadingArrowUp, Truck, BookDown, BriefcaseBusiness, Box, SquareUserRound, CircleUser, CarFront, Car } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Project',
        url: '/projects',
        icon: BriefcaseBusiness,
    },
    {
        title: 'Sales Order',
        url: '/sales-order',
        icon: FileDown,
    },
    {
        title: 'Sales Invoice',
        url: '/sales-invoice',
        icon: ClipboardCheck,
    },
    {
        title: 'Work Order',
        url: '/work-order',
        icon: FileText,
    },
    {
        title: 'Production',
        url: '/production',
        icon: CircleFadingArrowUp,
    },
    {
        title: 'Shipment',
        url: '/shipment',
        icon: Truck,
    },
];

const masterNavItems: NavItem[] = [
    {
        title: 'Products',
        url: '/client',
        icon: Box,
    },
    {
        title: 'Client',
        url: '/client',
        icon: SquareUserRound,
    },
    {
        title: 'Driver',
        url: '/client',
        icon: CircleUser,
    },
    {
        title: 'Verhicle',
        url: '/client',
        icon: Car,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Files',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Help Center',
        url: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain label="Overview" items={mainNavItems} />
                <NavMain label="Master Data" items={masterNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
