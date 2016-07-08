class Api::TagsController < ApplicationController

  def index
    @tags = Tag.joins(:taggings).where(taggings: { pin_id: params[:pin_id] })
  end

end
