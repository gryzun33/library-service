import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { FavoritesResponse } from './entities/favorites.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('favs')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all favorite items' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all favorite items',
    type: FavoritesResponse,
  })
  getFavorites(): FavoritesResponse {
    return this.favoritesService.getFavorites();
  }

  @Post('artist/:id')
  @ApiOperation({ summary: 'Add artist to favorites' })
  @ApiResponse({
    status: 201,
    description: 'Artist successfully added to favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 422,
    description: `Artist not found.`,
  })
  addArtistToFavorites(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.favoritesService.addArtist(id);
  }

  @Post('album/:id')
  @ApiOperation({ summary: 'Add album to favorites' })
  @ApiResponse({
    status: 201,
    description: 'Album successfully added to favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 422,
    description: `Album not found.`,
  })
  addAlbumToFavorites(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.favoritesService.addAlbum(id);
  }

  @Post('track/:id')
  @ApiOperation({ summary: 'Add track to favorites' })
  @ApiResponse({
    status: 201,
    description: 'Track successfully added to favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 422,
    description: `Track not found.`,
  })
  addTrackToFavorites(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.favoritesService.addTrack(id);
  }

  @Delete('artist/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove artist from favorites' })
  @ApiResponse({
    status: 204,
    description: 'Artist successfully removed from favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Artist is not favorite.',
  })
  removeArtistFromFavorites(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): void {
    this.favoritesService.removeArtist(id);
  }

  @Delete('album/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove album from favorites' })
  @ApiResponse({
    status: 204,
    description: 'Album successfully removed from favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Album is not favorite.',
  })
  removeAlbumFromFavorites(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.favoritesService.removeAlbum(id);
  }

  @Delete('track/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remove track from favorites' })
  @ApiResponse({
    status: 204,
    description: 'Track successfully removed from favorites',
  })
  @ApiResponse({
    status: 400,
    description: 'Invalid UUID format.',
  })
  @ApiResponse({
    status: 404,
    description: 'Track is not favorite.',
  })
  removeTrackFromFavorites(@Param('id', new ParseUUIDPipe()) id: string): void {
    this.favoritesService.removeTrack(id);
  }
}
