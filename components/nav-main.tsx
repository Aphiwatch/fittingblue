import {
  ChevronRight,
  Book,
  Bird,
  House,
  Pin,
  LifeBuoy,
  Send,
  Settings,
  ShoppingCart,
  Shirt,
  User,
  Baby,
  Mars,
  Venus
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";

export default async function NavMain() {
  const t = await getTranslations("NavMain");
  return (
    <SidebarGroup>
      <SidebarMenu>
        {/* Home */}
        <SidebarMenuItem key="home">
          <a href="/">
            <SidebarMenuButton isActive>
              <House />
              <span>{t("home")}</span>
            </SidebarMenuButton>
          </a>
        </SidebarMenuItem>

        {/* Collapsible introduction */}
        <Collapsible asChild defaultOpen className="group/collapsible">
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton>
                <Book />
                <span>{t("collections")}</span>
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                <SidebarMenuSubItem>
                  {/* subbutton 1 */}
                  <SidebarMenuSubButton asChild>
                    <a href="/">
                      <Mars/>
                      <span>{t("men")}</span>
                    </a>
                  </SidebarMenuSubButton>
                  {/* subbutton 2 */}
                  <SidebarMenuSubButton asChild>
                    <a href="/">
                    <Venus/>
                      <span>{t("women")}</span>
                    </a>
                  </SidebarMenuSubButton>
                  {/* subbutton 3 */}
                  <SidebarMenuSubButton asChild>
                    <a href="/">
                      <Baby/>
                      <span>{t("kid")}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
        {/* Fitting Room */}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <Shirt />
            <span>{t("fittingRoom")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {/* Cart */}
        <SidebarMenuItem>
          <SidebarMenuButton>
            <ShoppingCart />
            <span>{t("cart")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {/* About us menu */}
        <SidebarMenuItem key="aboutUs">
          <SidebarMenuButton>
            <User className="h-4 w-4" aria-hidden="true" />

            <a href="/">
              <span>{t("aboutUs")}</span>
            </a>
          </SidebarMenuButton>
          {/* <Link href="/aboutus">
              <SidebarMenuButton>
                <LifeBuoy className="h-4 w-4" aria-hidden="true" />
                <span>{t("support")}</span>
              </SidebarMenuButton>
            </Link> */}
        </SidebarMenuItem>
        {/* Feedback menu */}
        <SidebarMenuItem key="feedback">
          <Link href="/feedback">
            <SidebarMenuButton>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>{t("feedback")}</span>
            </SidebarMenuButton>
          </Link>
          {/* <SidebarMenuButton asChild isActive>
            <a href="/feedback">
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>{t("feedback")}</span>
            </a>
          </SidebarMenuButton> */}
        </SidebarMenuItem>
        {/* Setting Menu */}
        <SidebarMenuItem key="setting">
          {/* <Link href="/setting">
            <SidebarMenuButton>
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>{t("setting")}</span>
            </SidebarMenuButton>
          </Link> */}
          <SidebarMenuButton>
            <Settings className="h-4 w-4" aria-hidden="true" />
            <span>{t("setting")}</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
}
