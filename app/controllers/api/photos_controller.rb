class Api::PhotosController < ApplicationController

  def show
    @photo = Photo.find(params[:id])
  end

  def index
    @photos = Photo.all
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render :show
    else
      render json: @photo.errors, status: 422
    end
  end

  private

  def photo_params
    params.require(:photo).permit(:image_url)
  end

end
