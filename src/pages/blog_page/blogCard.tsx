import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Blog } from './blogPage';

interface BlogCardProps {
  blogs: Blog[];
}

export const BlogCards = ({ blogs }: BlogCardProps) => {
  return (
    <>
      <div className="flex w-auto flex-wrap items-center justify-center gap-4 sm:grid sm:grid-cols-2 sm:justify-between lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card
            key={blog.id}
            onClick={() => window.open(blog.url, '_blank')}
            className="flex h-[350px] cursor-pointer flex-col"
          >
            <CardHeader className="flex items-center justify-between space-y-0 pb-2">
              <div className="w-auto overflow-hidden rounded-sm">
                <img
                  src={blog.cover_image}
                  alt={''}
                  className="h-full max-h-40 w-full object-cover"
                  loading="lazy"
                />
              </div>

              <CardTitle className="py-2 font-heading text-sm">
                {blog.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex h-full min-h-16 flex-col justify-between">
              <p className="text-xs text-muted-foreground">
                {blog.description}
              </p>
              <div className="mt-4 flex items-center justify-center gap-4 rounded-sm border py-2">
                <img
                  src={blog.user.profile_image}
                  alt={blog.user.name}
                  className="h-8 w-8 rounded-full"
                />
                <p className="ml-2 w-8/12 text-xs text-gray-600">
                  By {blog.user.name} on{' '}
                  {new Date(blog.published_at).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
