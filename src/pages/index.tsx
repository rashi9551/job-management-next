import JobFilter from "@/components/jobFilter";
import NavbarDemo from "@/components/navbar";
import { JobFilters } from "@/interface/job";
import { useCallback, useState } from "react";
import { isEqual } from "lodash";
import CardListing from "@/components/cardListing";



export default function Home() {
  const [filters, setFilters]= useState<JobFilters>({
    searchQuery: "",
    location: null,
    jobType: null,
    salary: [20, 60],
  });

  // Memoized handler for filter changes to prevent unnecessary re-renders
  const handleFilterChange = useCallback((newFilters: JobFilters): void => {
    console.log("Filters changed:", newFilters);
    setFilters((prev) => {
      if (isEqual(prev, newFilters)) {
        return prev; // Prevent update if filters are unchanged
      }
      return newFilters;
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#fbfbff]">
      <NavbarDemo/>
      <JobFilter onFilterChange={handleFilterChange} />
      <CardListing/>
    </div>
  );
}
