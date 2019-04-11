class Api::BlogsController < ApplicationController
  def index
    render json: current_user.blogs
  end

  def create
    blog = current_user.blogs.new(blog_params)
    if blog.save
      render json: blog
    else
      render json: blog.errors
    end
  end
  private
    def blog_params
      params.require(:blog).permit(:body, :title)
    end
end
