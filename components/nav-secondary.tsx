import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar";
//   import { getTranslations } from "next-intl/server";
  import { Separator } from "./ui/separator";
  
  export default async function NavSecondary() {
    // const t = await getTranslations("NavSecondary");
  
    return (
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            {/* alright reserved */}
            <SidebarMenuItem key="alright">
              <Separator className="my-4" />
              <div className="container mx-auto">
                <p className="text-center">
                  © {new Date().getFullYear()} Fitting Blue
                </p>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    );
  }
  