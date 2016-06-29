class Api::PinsController < ApplicationController

  def show
    @pin = Pin.find(params[:id])
  end

  def index
    @pins = Pin.all
  end

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render :show
    else
      render json: @pin.errors, status: 422
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:image_url)
  end

end
