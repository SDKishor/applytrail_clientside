import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/ui/loader-spinner';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Search } from 'lucide-react';
import { BlogCards } from './blogCard';

// Define types for blog data and response
export interface Blog {
  id: number;
  title: string;
  cover_image: string;
  description: string;
  url: string;
  user: {
    name: string;
    profile_image: string;
  };
  published_at: string;
}

const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchTag, setSearchTag] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  useEffect(() => {
    const fetchPopularBlogs = async () => {
      const PopularParams = {
        top: 10,
        page: page,
        per_page: itemsPerPage,
        tags: searchQuery,
      };
      const tagParams = {
        tags: searchQuery,
        page: page,
        per_page: itemsPerPage,
      };

      try {
        const response = await axios.get('https://dev.to/api/articles', {
          params: searchQuery ? tagParams : PopularParams,
        });
        setBlogs(response.data);
        setTotalPages(
          Math.ceil(Number(response.headers['x-total-count']) / 10)
        );
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          // Handle Axios error
          toast.error('Error fetching blog posts', {
            description: err.message || 'Network error occurred',
          });
        } else {
          // Handle other types of errors
          const errorMessage =
            err instanceof Error ? err.message : 'An unexpected error occurred';
          toast.error('An unexpected error occurred', {
            description: errorMessage || 'Please try again later.',
          });
        }
        setError('Failed to fetch blog posts. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchPopularBlogs();
  }, [page, itemsPerPage, searchQuery]);

  console.log(blogs);

  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Latest Blogs</h1>

      {/* Search Bar */}

      <div className="mb-4 flex items-center justify-between">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchQuery(searchTag);
          }}
          className="relative w-full max-w-md"
        >
          <Input
            onChange={(e) => setSearchTag(e.target.value)}
            placeholder="Search tags for blog posts"
            className=""
          />
          <Button
            type="submit"
            variant={'ghost'}
            className="absolute right-2 top-0"
          >
            <Search />
          </Button>
        </form>
        <div className="">
          <Select onValueChange={(value) => setItemsPerPage(Number(value))}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="20">20</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {loading && (
        <div className="flex min-h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      {error && <p>{error}</p>}

      {/* Blog Cards */}

      <BlogCards blogs={blogs} />

      {/* Pagination Controls */}
      <div className="mt-6 flex items-center justify-between">
        <Button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="bg-blue-500 text-white"
        >
          Previous
        </Button>
        <p className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </p>
        <Button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="bg-blue-500 text-white"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default BlogPage;
