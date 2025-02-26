import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, FileDown } from 'lucide-react';
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
        icon: FileDown,
    },
    {
        title: 'Sales Order',
        url: '/sales-order',
        icon: FileDown,
    },
    {
        title: 'Sales Invoice',
        url: '/sales-invoice',
        icon: FileDown,
    },
    {
        title: 'Work Order',
        url: '/work-order',
        icon: FileDown,
    },
    {
        title: 'Production',
        url: '/production',
        icon: FileDown,
    },
    {
        title: 'Shipment',
        url: '/shipment',
        icon: FileDown,
    },
];

const masterNavItems: NavItem[] = [
    {
        title: 'Products',
        url: '/client',
        icon: FileDown,
    },
    {
        title: 'Client',
        url: '/client',
        icon: LayoutGrid,
    },
    {
        title: 'Driver',
        url: '/client',
        icon: FileDown,
    },
    {
        title: 'Verhicle',
        url: '/client',
        icon: FileDown,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        url: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
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
