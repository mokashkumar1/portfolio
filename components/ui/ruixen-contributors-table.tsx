"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

import { portfolioData } from "@/data/portfolio";

type Contributor = {
  name: string;
  email: string;
  avatar: string;
  role: string;
};

type TableProject = {
  id: string;
  title: string;
  repo: string;
  status: "Active" | "Inactive" | "In Progress";
  team: string;
  tech: string;
  createdAt: string;
  contributors: Contributor[];
};

const mockDates = [
  "Apr 2024",
  "Jan 2024",
  "Nov 2023",
  "Aug 2023",
  "May 2023",
  "Feb 2023",
  "Oct 2022"
];

const data: TableProject[] = portfolioData.projects
  .filter(proj => !proj.title.includes("ParhoSain"))
  .map((proj, idx) => ({
  id: String(idx + 1),
  title: proj.title,
  repo: proj.githubUrl || proj.demoUrl || "Private Repo",
  status: proj.title.includes("Amanat") ? "Inactive" : "Active",
  team: proj.category,
  tech: proj.tech.slice(0, 3).join(", "), // showing top 3 tech
  createdAt: mockDates[idx] || "2023",
  contributors: [
    {
      name: portfolioData.name,
      email: portfolioData.email,
      avatar: "https://github.com/mokashkumar1.png",
      role: "Lead Developer",
    },
  ],
}));

const allColumns = [
  "Project",
  "Repository",
  "Team",
  "Tech",
  "Created At",
  "Contributors",
  "Status",
] as const;

function ContributorsTable() {
  const [visibleColumns, setVisibleColumns] = useState<string[]>([...allColumns]);
  const [statusFilter, setStatusFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");

  const filteredData = data.filter((project) => {
    return (
      (!statusFilter || project.status === statusFilter) &&
      (!techFilter || project.tech.toLowerCase().includes(techFilter.toLowerCase()))
    );
  });

  const toggleColumn = (col: string) => {
    setVisibleColumns((prev) =>
      prev.includes(col)
        ? prev.filter((c) => c !== col)
        : [...prev, col]
    );
  };

  return (
        <div className="container my-10 space-y-4 p-4 border border-zinc-800/50 rounded-lg bg-black shadow-[0_0_30px_rgba(34,211,238,0.05)] overflow-x-auto text-zinc-300">
      <div className="flex flex-wrap gap-4 items-center justify-between mb-6">
        <div className="flex gap-2 flex-wrap">
          <Input
            placeholder="Filter by technology..."
            value={techFilter}
            onChange={(e) => setTechFilter(e.target.value)}
            className="w-48 bg-zinc-900 border-zinc-800"
          />
          <Input
            placeholder="Filter by status..."
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-48 bg-zinc-900 border-zinc-800"
          />
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48 bg-zinc-900 border-zinc-800">
            {allColumns.map((col) => (
              <DropdownMenuCheckboxItem
                key={col}
                checked={visibleColumns.includes(col)}
                onCheckedChange={() => toggleColumn(col)}
                className="hover:bg-zinc-800"
              >
                {col}
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-zinc-800 hover:bg-transparent">
            {visibleColumns.includes("Project") && <TableHead className="w-[180px] text-zinc-400">Project</TableHead>}
            {visibleColumns.includes("Repository") && <TableHead className="w-[220px] text-zinc-400">Repository</TableHead>}
            {visibleColumns.includes("Team") && <TableHead className="w-[150px] text-zinc-400">Team</TableHead>}
            {visibleColumns.includes("Tech") && <TableHead className="w-[150px] text-zinc-400">Tech</TableHead>}
            {visibleColumns.includes("Created At") && <TableHead className="w-[120px] text-zinc-400">Created At</TableHead>}
            {visibleColumns.includes("Contributors") && <TableHead className="w-[150px] text-zinc-400">Contributors</TableHead>}
            {visibleColumns.includes("Status") && <TableHead className="w-[100px] text-zinc-400">Status</TableHead>}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.length ? (
            filteredData.map((project) => (
              <TableRow key={project.id} className="border-zinc-800 hover:bg-zinc-900/50">
                {visibleColumns.includes("Project") && (
                  <TableCell className="font-medium whitespace-nowrap text-zinc-100">{project.title}</TableCell>
                )}
                {visibleColumns.includes("Repository") && (
                  <TableCell className="whitespace-nowrap">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      {project.repo.replace("https://", "")}
                    </a>
                  </TableCell>
                )}
                {visibleColumns.includes("Team") && <TableCell className="whitespace-nowrap">{project.team}</TableCell>}
                {visibleColumns.includes("Tech") && <TableCell className="whitespace-nowrap">{project.tech}</TableCell>}
                {visibleColumns.includes("Created At") && <TableCell className="whitespace-nowrap">{project.createdAt}</TableCell>}
                {visibleColumns.includes("Contributors") && (
                  <TableCell className="min-w-[120px]">
                    <div className="flex -space-x-2">
                      <TooltipProvider>
                        {project.contributors.map((contributor, idx) => (
                          <Tooltip key={idx}>
                            <TooltipTrigger asChild>
                              <Avatar className="h-8 w-8 ring-2 ring-zinc-900 hover:z-10">
                                <AvatarImage src={contributor.avatar} alt={contributor.name} />
                                <AvatarFallback className="bg-zinc-800 text-zinc-300">{contributor.name[0]}</AvatarFallback>
                              </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="text-sm bg-zinc-800 border-zinc-700 text-zinc-200">
                              <p className="font-semibold text-white">{contributor.name}</p>
                              <p className="text-xs text-zinc-400">{contributor.email}</p>
                              <p className="text-xs italic text-cyan-400">{contributor.role}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </TooltipProvider>
                    </div>
                  </TableCell>
                )}
                {visibleColumns.includes("Status") && (
                  <TableCell className="whitespace-nowrap">
                    <Badge
                      className={cn(
                        "whitespace-nowrap border-0",
                        project.status === "Active" && "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20",
                        project.status === "Inactive" && "bg-zinc-500/10 text-zinc-400 hover:bg-zinc-500/20",
                        project.status === "In Progress" && "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20",
                      )}
                    >
                      {project.status}
                    </Badge>
                  </TableCell>
                )}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={visibleColumns.length} className="text-center py-6">
                No results found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContributorsTable;
